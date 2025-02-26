import "./bootstrap";
var button =
    `<button class="btn btn-primary col-2 mb-2 rounded newProduct" type="button" data-toogle="tootip" title="Nuevo Artículo">Nuevo</button>` +
    `<button class="btn btn-danger col-1 mb-2 rounded" type="button" id="kardexPDF">PDF</button>`;

import { initializeApp } from "firebase/app";
import {
    getDatabase,
    ref,
    child,
    get,
    set,
    push,
    update,
    onValue,
} from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDHAVINZspNS6ChUIvK5jVHCQ8tOtQ1L7w",
    authDomain: "kardex-b2d64.firebaseapp.com",
    databaseURL: "https://kardex-b2d64-default-rtdb.firebaseio.com",
    projectId: "kardex-b2d64",
    storageBucket: "kardex-b2d64.firebasestorage.app",
    messagingSenderId: "1073459110441",
    appId: "1:1073459110441:web:2495fd8db3158eacadb238",
    measurementId: "G-E5QF4TQE52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = ref(getDatabase());

var table = $("#inventoryTable").DataTable({
    autoWidth: false,
    responsive: true,
    deferRender: true,

    columnDefs: [
        {
            width: "10%",
            targets: [0, 3, 4],
            className: "text-center",
        },
        {
            width: "25%",
            targets: 5,
            className: "text-center",
        },
        {
            width: "25%",
            targets: 2,
        },
        {
            responsivePriority: 1,
            targets: -1,
        },
    ],
});
var tableIn = $("#inTable").DataTable({
    autoWidth: false,
    responsive: true,
    deferRender: true,

    columnDefs: [
        {
            width: "10%",
            targets: [0, 3, 4],
            className: "text-center",
        },
        {
            width: "15%",
            targets: 5,
            className: "text-center",
        },
        {
            width: "25%",
            targets: 1,
        },
        {
            responsivePriority: 1,
            targets: -1,
        },
    ],
});
var tableOut = $("#outTable").DataTable({
    autoWidth: false,
    responsive: true,
    deferRender: true,

    columnDefs: [
        {
            width: "10%",
            targets: [0, 3, 4],
            className: "text-center",
        },
        {
            width: "15%",
            targets: 5,
            className: "text-center",
        },
        {
            width: "25%",
            targets: 1,
        },
        {
            responsivePriority: 1,
            targets: -1,
        },
    ],
});

var countInventory = 0;
var countIn = 0;
var countOut = 0;

const today = new Date();
const formattedDate = today.toLocaleDateString("en-GB");

$("#newProduct").on("hidden.bs.modal", function () {
    $("#productFormNew")[0].reset();
});
$("#addProduct").on("hidden.bs.modal", function () {
    $("#productFormAdd")[0].reset();
});
$("#updateProduct").on("hidden.bs.modal", function () {
    $("#productFormUpdate")[0].reset();
});
$("#sellProduct").on("hidden.bs.modal", function () {
    $("#productFormSell")[0].reset();
});

lock();

$("#unlock").click(function () {
    getAccess();
});

async function getAccess() {
    const { value: formValues } = await Swal.fire({
        title: "Acceder",
        html: `
          <label class="swal2-input-label">Usuario</label>
          <input id="swal-input1" class="swal2-input" placeholder="Ingresa tu usuario">
          <label class="swal2-input-label">Contraseña</label>
          <input id="swal-input2" class="swal2-input" placeholder="Ingresa tu contraseña" type="password">
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Ingresar",
        cancelButtonText: "Cancelar",
        preConfirm: () => {
            const usuario = document.getElementById("swal-input1").value;
            const contrasena = document.getElementById("swal-input2").value;

            if (!usuario || !contrasena) {
                Swal.showValidationMessage(
                    "Todos los campos son obligatorios."
                );
            }

            return [usuario, contrasena];
        },
    });
    if (formValues) {
        get(child(db, `accesos`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    $.each(snapshot.val(), function (index, value) {
                        if (value != null) {
                            if (
                                value.user == formValues[0] &&
                                value.pass == formValues[1]
                            ) {
                                Swal.fire({
                                    title: "Acceso Exitoso 🔓",
                                    text: `¡Bienvenido, ${value.name}!`,
                                    icon: "success",
                                    timer: 2000,
                                    showConfirmButton: false,
                                });

                                $("#unlock").hide();
                                $("#lock").prop("hidden", false).show();
                                $("#component-newProduct").append(button);

                                table.clear().draw();
                                tableIn.clear().draw();
                                tableOut.clear().draw();

                                countInventory = 0;
                                countIn = 0;
                                countOut = 0;

                                updateTable();

                                $(".newProduct").on("click", function () {
                                    $("#newProduct").modal("show");

                                    $("#newProduct").on(
                                        "shown.bs.modal",
                                        function () {
                                            $("#productFormNew")
                                                .off("submit")
                                                .on("submit", function (e) {
                                                    e.preventDefault();

                                                    var user = value.name;
                                                    var id = $("#id").val();
                                                    var articulo =
                                                        $("#articulo").val();
                                                    var detalle =
                                                        $("#detalle").val();
                                                    var cantidadTotal =
                                                        $(
                                                            "#cantidadTotal"
                                                        ).val();
                                                    var precioCompra =
                                                        $(
                                                            "#precioCompra"
                                                        ).val();
                                                    var precioVenta =
                                                        $("#precioVenta").val();
                                                    var fechaIngreso =
                                                        formattedDate;

                                                    if (id == "") {
                                                        const db =
                                                            getDatabase();
                                                        const inventariosRef =
                                                            ref(
                                                                db,
                                                                "inventarios"
                                                            );
                                                        const newInventariosRef =
                                                            push(
                                                                inventariosRef
                                                            );

                                                        set(newInventariosRef, {
                                                            articulo: articulo,
                                                            detalle: detalle,
                                                            cantidadTotal:
                                                                cantidadTotal,
                                                            precioVenta:
                                                                precioVenta,
                                                            tipo: "E",
                                                        });

                                                        const entradasRef = ref(
                                                            db,
                                                            "entradas"
                                                        );
                                                        const newEntradasRef =
                                                            push(entradasRef);

                                                        set(newEntradasRef, {
                                                            cantidadTotal:
                                                                cantidadTotal,
                                                            precioCompra:
                                                                precioCompra,
                                                            fechaIngreso:
                                                                formattedDate,
                                                            idInventario:
                                                                newInventariosRef.key,
                                                            user: user,
                                                        });

                                                        const reportRef = ref(
                                                            db,
                                                            "report"
                                                        );
                                                        const newReportRef =
                                                            push(reportRef);

                                                        set(newReportRef, {
                                                            articulo: articulo,
                                                            detalle: detalle,
                                                            cantidadEntrada:
                                                                cantidadTotal,
                                                            precioEntradaVU:
                                                                precioCompra,
                                                            precioEntradaVT: (
                                                                parseFloat(
                                                                    cantidadTotal
                                                                ) *
                                                                parseFloat(
                                                                    precioCompra
                                                                )
                                                            ).toFixed(2),
                                                            cantidadSalida: 0,
                                                            precioSalidaVU:
                                                                precioVenta,
                                                            precioSalidaVT: 0,
                                                            fechaReport:
                                                                formattedDate,
                                                            idInventario:
                                                                newInventariosRef.key,
                                                        });

                                                        $("#newProduct").modal(
                                                            "hide"
                                                        );
                                                        $("#newProduct").on(
                                                            "hidden.bs.modal",
                                                            function () {
                                                                $(
                                                                    "#productFormNew"
                                                                )[0].reset();
                                                            }
                                                        );

                                                        Swal.fire({
                                                            title: "¡Producto Agregado!",
                                                            text: "El producto fue agregado exitosamente.",
                                                            icon: "success",
                                                            confirmButtonText:
                                                                "Aceptar",
                                                            timer: 2000,
                                                            showConfirmButton: false,
                                                        });

                                                        updateTable();
                                                    } else {
                                                        alert(
                                                            "Todos los campos son obligatorios"
                                                        );
                                                    }
                                                });
                                        }
                                    );
                                });

                                $(document).on(
                                    "click",
                                    ".inventoryAdd",
                                    function () {
                                        const id = $(this).data("id");
                                        const articulo = $(this)
                                            .closest("tr")
                                            .find("td")
                                            .eq(1)
                                            .text();
                                        const detalle = $(this)
                                            .closest("tr")
                                            .find("td")
                                            .eq(2)
                                            .text();
                                        const cantidadTotalTable = $(this)
                                            .closest("tr")
                                            .find("td")
                                            .eq(3)
                                            .text();

                                        const precioVentaTable = $(this)
                                            .closest("tr")
                                            .find("td")
                                            .eq(4)
                                            .text();

                                        $("#addProduct").modal("show");
                                        $("#addProduct").on(
                                            "shown.bs.modal",
                                            function () {
                                                $("#articuloAdd").prop(
                                                    "readonly",
                                                    true
                                                );
                                                $("#detalleAdd").prop(
                                                    "readonly",
                                                    true
                                                );
                                                $("#idAdd").val(id);
                                                $("#articuloAdd").val(articulo);
                                                $("#detalleAdd").val(detalle);
                                                get(child(db, `entradas`)).then(
                                                    (snapshot) => {
                                                        if (snapshot.exists()) {
                                                            $.each(
                                                                snapshot.val(),
                                                                function (
                                                                    indexEntrada,
                                                                    valueEntrada
                                                                ) {
                                                                    if (
                                                                        valueEntrada.idInventario ==
                                                                        id
                                                                    ) {
                                                                        $(
                                                                            "#precioCompraAdd"
                                                                        )
                                                                            .val(
                                                                                valueEntrada.precioCompra
                                                                            )
                                                                            .prop(
                                                                                "readonly",
                                                                                true
                                                                            );
                                                                    }
                                                                }
                                                            );
                                                        }
                                                    }
                                                );
                                            }
                                        );

                                        $("#productFormAdd")
                                            .off("submit")
                                            .on("submit", function (e) {
                                                e.preventDefault();

                                                var user = value.name;
                                                var id = $("#idAdd").val();
                                                var articulo =
                                                    $("#articuloAdd").val();
                                                var detalle =
                                                    $("#detalleAdd").val();
                                                var cantidadTotal =
                                                    $(
                                                        "#cantidadTotalAdd"
                                                    ).val();
                                                var precioCompra =
                                                    $("#precioCompraAdd").val();

                                                get(child(db, `report`)).then(
                                                    (snapshot) => {
                                                        if (snapshot.exists()) {
                                                            $.each(
                                                                snapshot.val(),
                                                                function (
                                                                    indexReport,
                                                                    valueReport
                                                                ) {
                                                                    console.log(
                                                                        id,
                                                                        valueReport
                                                                    );
                                                                    if (
                                                                        id ==
                                                                        valueReport.idInventario
                                                                    ) {
                                                                        const db =
                                                                            getDatabase();
                                                                        let totalEntradas =
                                                                            parseFloat(
                                                                                valueReport.cantidadEntrada
                                                                            ) +
                                                                            parseFloat(
                                                                                cantidadTotal
                                                                            );
                                                                        const reportUpdatee =
                                                                            {
                                                                                articulo:
                                                                                    valueReport.articulo,
                                                                                detalle:
                                                                                    valueReport.detalle,
                                                                                cantidadEntrada:
                                                                                    totalEntradas,
                                                                                precioEntradaVU:
                                                                                    valueReport.precioEntradaVU,
                                                                                precioEntradaVT:
                                                                                    (
                                                                                        parseFloat(
                                                                                            totalEntradas
                                                                                        ) *
                                                                                        parseFloat(
                                                                                            valueReport.precioEntradaVU
                                                                                        )
                                                                                    ).toFixed(
                                                                                        2
                                                                                    ),
                                                                                cantidadSalida:
                                                                                    valueReport.cantidadSalida,
                                                                                precioSalidaVU:
                                                                                    valueReport.precioSalidaVU,
                                                                                precioSalidaVT:
                                                                                    valueReport.precioSalidaVT,
                                                                                fechaReport:
                                                                                    formattedDate,
                                                                                idInventario:
                                                                                    valueReport.idInventario,
                                                                            };

                                                                        const updatesReport =
                                                                            {};
                                                                        updatesReport[
                                                                            "/report/" +
                                                                                indexReport
                                                                        ] =
                                                                            reportUpdatee;
                                                                        update(
                                                                            ref(
                                                                                db
                                                                            ),
                                                                            updatesReport
                                                                        );
                                                                    }
                                                                }
                                                            );
                                                        }
                                                    }
                                                );

                                                get(child(db, `inventarios`))
                                                    .then((snapshot) => {
                                                        if (snapshot.exists()) {
                                                            $.each(
                                                                snapshot.val(),
                                                                function (
                                                                    index,
                                                                    value
                                                                ) {
                                                                    if (
                                                                        value !=
                                                                        null
                                                                    ) {
                                                                        if (
                                                                            id ==
                                                                            index
                                                                        ) {
                                                                            const db =
                                                                                getDatabase();

                                                                            var total =
                                                                                parseFloat(
                                                                                    cantidadTotal
                                                                                ) +
                                                                                parseFloat(
                                                                                    cantidadTotalTable
                                                                                );
                                                                            const inventaryUpdate =
                                                                                {
                                                                                    articulo:
                                                                                        articulo,
                                                                                    detalle:
                                                                                        detalle,
                                                                                    cantidadTotal:
                                                                                        total,
                                                                                    precioVenta:
                                                                                        precioVentaTable,
                                                                                    tipo: "E",
                                                                                };

                                                                            const updates =
                                                                                {};
                                                                            updates[
                                                                                "/inventarios/" +
                                                                                    index
                                                                            ] =
                                                                                inventaryUpdate;
                                                                            update(
                                                                                ref(
                                                                                    db
                                                                                ),
                                                                                updates
                                                                            );

                                                                            const entradasRef =
                                                                                ref(
                                                                                    db,
                                                                                    "entradas"
                                                                                );
                                                                            const newEntradasRef =
                                                                                push(
                                                                                    entradasRef
                                                                                );

                                                                            set(
                                                                                newEntradasRef,
                                                                                {
                                                                                    cantidadTotal:
                                                                                        cantidadTotal,
                                                                                    precioCompra:
                                                                                        precioCompra,
                                                                                    fechaIngreso:
                                                                                        formattedDate,
                                                                                    idInventario:
                                                                                        index,
                                                                                    user: user,
                                                                                }
                                                                            );

                                                                            updateTable();

                                                                            $(
                                                                                "#addProduct"
                                                                            ).modal(
                                                                                "hide"
                                                                            );
                                                                            $(
                                                                                "#addProduct"
                                                                            ).on(
                                                                                "hidden.bs.modal",
                                                                                function () {
                                                                                    $(
                                                                                        "#productFormAdd"
                                                                                    )[0].reset();
                                                                                }
                                                                            );
                                                                            Swal.fire(
                                                                                {
                                                                                    title: "¡Stock Adicionado!",
                                                                                    text: "El stock fue aumentado exitosamente.",
                                                                                    icon: "success",
                                                                                    confirmButtonText:
                                                                                        "Aceptar",
                                                                                    timer: 2000,
                                                                                    showConfirmButton: false,
                                                                                }
                                                                            );
                                                                        }
                                                                    }
                                                                }
                                                            );
                                                        } else {
                                                            console.log(
                                                                "No data available"
                                                            );
                                                        }
                                                    })
                                                    .catch((error) => {
                                                        console.error(error);
                                                    });
                                            });
                                    }
                                );

                                $(document).on(
                                    "click",
                                    ".inventoryUpdate",
                                    function () {
                                        const id = $(this).data("id");
                                        const articulo = $(this)
                                            .closest("tr")
                                            .find("td")
                                            .eq(1)
                                            .text();
                                        const detalle = $(this)
                                            .closest("tr")
                                            .find("td")
                                            .eq(2)
                                            .text();
                                        const cantidadTotalTable = $(this)
                                            .closest("tr")
                                            .find("td")
                                            .eq(3)
                                            .text();

                                        const precioVentaTable = $(this)
                                            .closest("tr")
                                            .find("td")
                                            .eq(4)
                                            .text();

                                        $("#updateProduct").modal("show");
                                        $("#updateProduct").on(
                                            "shown.bs.modal",
                                            function () {
                                                $("#idUpdate").val(id);
                                                $("#articuloUpdate").val(
                                                    articulo
                                                );
                                                $("#detalleUpdate").val(
                                                    detalle
                                                );
                                                $("#cantidadTotalUpdate")
                                                    .val(cantidadTotalTable)
                                                    .prop("readonly", true);
                                                $("#precioVentaUpdate")
                                                    .val(precioVentaTable)
                                                    .prop("readonly", true);
                                            }
                                        );

                                        $("#productFormUpdate")
                                            .off("submit")
                                            .on("submit", function (e) {
                                                e.preventDefault();
                                                var id = $("#idUpdate").val();
                                                var articulo =
                                                    $("#articuloUpdate").val();
                                                var detalle =
                                                    $("#detalleUpdate").val();
                                                var cantidadTotal = $(
                                                    "#cantidadTotalUpdate"
                                                ).val();
                                                var precioVenta =
                                                    $(
                                                        "#precioVentaUpdate"
                                                    ).val();

                                                get(child(db, `report`))
                                                    .then((snapshot) => {
                                                        if (snapshot.exists()) {
                                                            $.each(
                                                                snapshot.val(),
                                                                function (
                                                                    indexReport,
                                                                    valueReport
                                                                ) {
                                                                    if (
                                                                        valueReport !=
                                                                        null
                                                                    ) {
                                                                        if (
                                                                            valueReport.idInventario ==
                                                                            id
                                                                        ) {
                                                                            const db =
                                                                                getDatabase();
                                                                            const reportUpdates =
                                                                                {
                                                                                    articulo:
                                                                                        articulo,
                                                                                    detalle:
                                                                                        detalle,
                                                                                    cantidadEntrada:
                                                                                        valueReport.cantidadEntrada,
                                                                                    precioEntradaVU:
                                                                                        valueReport.precioEntradaVU,
                                                                                    precioEntradaVT:
                                                                                        valueReport.precioEntradaVT,
                                                                                    cantidadSalida:
                                                                                        valueReport.cantidadSalida,
                                                                                    precioSalidaVU:
                                                                                        valueReport.precioSalidaVU,
                                                                                    precioSalidaVT:
                                                                                        valueReport.precioSalidaVT,
                                                                                    fechaReport:
                                                                                        valueReport.fechaReport,
                                                                                    idInventario:
                                                                                        valueReport.idInventario,
                                                                                };

                                                                            const updatesReport =
                                                                                {};
                                                                            updatesReport[
                                                                                "/report/" +
                                                                                    indexReport
                                                                            ] =
                                                                                reportUpdates;
                                                                            update(
                                                                                ref(
                                                                                    db
                                                                                ),
                                                                                updatesReport
                                                                            );
                                                                        }
                                                                    }
                                                                }
                                                            );
                                                        }
                                                    })
                                                    .catch((error) => {
                                                        console.error(error);
                                                    });

                                                get(child(db, `inventarios`))
                                                    .then((snapshot) => {
                                                        if (snapshot.exists()) {
                                                            $.each(
                                                                snapshot.val(),
                                                                function (
                                                                    index,
                                                                    value
                                                                ) {
                                                                    if (
                                                                        value !=
                                                                        null
                                                                    ) {
                                                                        if (
                                                                            id ==
                                                                            index
                                                                        ) {
                                                                            const db =
                                                                                getDatabase();

                                                                            const inventaryUpdate =
                                                                                {
                                                                                    articulo:
                                                                                        articulo,
                                                                                    detalle:
                                                                                        detalle,
                                                                                    cantidadTotal:
                                                                                        cantidadTotal,
                                                                                    precioVenta:
                                                                                        precioVenta,
                                                                                    tipo: "E",
                                                                                };

                                                                            const updates =
                                                                                {};
                                                                            updates[
                                                                                "/inventarios/" +
                                                                                    index
                                                                            ] =
                                                                                inventaryUpdate;
                                                                            update(
                                                                                ref(
                                                                                    db
                                                                                ),
                                                                                updates
                                                                            );

                                                                            updateTable();

                                                                            $(
                                                                                "#updateProduct"
                                                                            ).modal(
                                                                                "hide"
                                                                            );
                                                                            $(
                                                                                "#updateProduct"
                                                                            ).on(
                                                                                "hidden.bs.modal",
                                                                                function () {
                                                                                    $(
                                                                                        "#productFormUpdate"
                                                                                    )[0].reset();
                                                                                }
                                                                            );

                                                                            Swal.fire(
                                                                                {
                                                                                    title: "¡Producto Modificado!",
                                                                                    text: "El producto fue modificado exitosamente.",
                                                                                    icon: "success",
                                                                                    confirmButtonText:
                                                                                        "Aceptar",
                                                                                    timer: 2000,
                                                                                    showConfirmButton: false,
                                                                                }
                                                                            );
                                                                        }
                                                                    }
                                                                }
                                                            );
                                                        } else {
                                                            console.log(
                                                                "No data available"
                                                            );
                                                        }
                                                    })
                                                    .catch((error) => {
                                                        console.error(error);
                                                    });
                                            });
                                    }
                                );

                                $(document).on(
                                    "click",
                                    ".inventorySell",
                                    function () {
                                        const id = $(this).data("id");
                                        const articulo = $(this)
                                            .closest("tr")
                                            .find("td")
                                            .eq(1)
                                            .text();
                                        const detalle = $(this)
                                            .closest("tr")
                                            .find("td")
                                            .eq(2)
                                            .text();
                                        const cantidadTotalTable = $(this)
                                            .closest("tr")
                                            .find("td")
                                            .eq(3)
                                            .text();

                                        const precioVentaTable = $(this)
                                            .closest("tr")
                                            .find("td")
                                            .eq(4)
                                            .text();

                                        $("#sellProduct").modal("show");
                                        $("#sellProduct").on(
                                            "shown.bs.modal",
                                            function () {
                                                $("#idSell").val(id);
                                                $("#articuloSell")
                                                    .val(articulo)
                                                    .prop("readonly", true);
                                                $("#detalleSell")
                                                    .val(detalle)
                                                    .prop("readonly", true);
                                                $("#cantidadTotalSell")
                                                    .val(cantidadTotalTable)
                                                    .prop(
                                                        "max",
                                                        cantidadTotalTable
                                                    );
                                                $("#precioVentaSell")
                                                    .val(precioVentaTable)
                                                    .prop("readonly", true);
                                            }
                                        );

                                        $("#productFormSell")
                                            .off("submit")
                                            .on("submit", function (e) {
                                                e.preventDefault();

                                                var user = value.name;
                                                var id = $("#idSell").val();
                                                var articulo =
                                                    $("#articuloSell").val();
                                                var detalle =
                                                    $("#detalleSell").val();
                                                var cantidadTotal =
                                                    $(
                                                        "#cantidadTotalSell"
                                                    ).val();
                                                var precioCompra =
                                                    $(
                                                        "#precioCompraSell"
                                                    ).val();

                                                get(child(db, `report`)).then(
                                                    (snapshot) => {
                                                        if (snapshot.exists()) {
                                                            $.each(
                                                                snapshot.val(),
                                                                function (
                                                                    indexReport,
                                                                    valueReport
                                                                ) {
                                                                    if (
                                                                        valueReport !=
                                                                        null
                                                                    ) {
                                                                        if (
                                                                            id ==
                                                                            valueReport.idInventario
                                                                        ) {
                                                                            const db =
                                                                                getDatabase();

                                                                            let totalSalida =
                                                                                parseFloat(
                                                                                    valueReport.cantidadSalida
                                                                                ) +
                                                                                parseFloat(
                                                                                    cantidadTotal
                                                                                );
                                                                            const reportUpdate =
                                                                                {
                                                                                    articulo:
                                                                                        articulo,
                                                                                    detalle:
                                                                                        detalle,
                                                                                    cantidadEntrada:
                                                                                        valueReport.cantidadEntrada,
                                                                                    precioEntradaVU:
                                                                                        valueReport.precioEntradaVU,
                                                                                    precioEntradaVT:
                                                                                        valueReport.precioEntradaVT,
                                                                                    cantidadSalida:
                                                                                        totalSalida,
                                                                                    precioSalidaVU:
                                                                                        valueReport.precioSalidaVU,
                                                                                    precioSalidaVT:
                                                                                        parseFloat(
                                                                                            valueReport.precioSalidaVU
                                                                                        ) *
                                                                                        parseFloat(
                                                                                            totalSalida
                                                                                        ),
                                                                                    fechaReport:
                                                                                        formattedDate,
                                                                                    idInventario:
                                                                                        valueReport.idInventario,
                                                                                };

                                                                            const updatesReport =
                                                                                {};
                                                                            updatesReport[
                                                                                "/report/" +
                                                                                    indexReport
                                                                            ] =
                                                                                reportUpdate;
                                                                            update(
                                                                                ref(
                                                                                    db
                                                                                ),
                                                                                updatesReport
                                                                            );
                                                                        }
                                                                    }
                                                                }
                                                            );
                                                        }
                                                    }
                                                );

                                                get(child(db, `inventarios`))
                                                    .then((snapshot) => {
                                                        if (snapshot.exists()) {
                                                            $.each(
                                                                snapshot.val(),
                                                                function (
                                                                    indexInventory,
                                                                    valueOut
                                                                ) {
                                                                    if (
                                                                        value !=
                                                                        null
                                                                    ) {
                                                                        if (
                                                                            id ==
                                                                            indexInventory
                                                                        ) {
                                                                            const db =
                                                                                getDatabase();

                                                                            const inventaryUpdate =
                                                                                {
                                                                                    articulo:
                                                                                        articulo,
                                                                                    detalle:
                                                                                        detalle,
                                                                                    cantidadTotal:
                                                                                        parseFloat(
                                                                                            cantidadTotalTable
                                                                                        ) -
                                                                                        cantidadTotal,
                                                                                    precioVenta:
                                                                                        precioVentaTable,
                                                                                    tipo: "E",
                                                                                };

                                                                            const updates =
                                                                                {};
                                                                            updates[
                                                                                "/inventarios/" +
                                                                                    indexInventory
                                                                            ] =
                                                                                inventaryUpdate;
                                                                            update(
                                                                                ref(
                                                                                    db
                                                                                ),
                                                                                updates
                                                                            );

                                                                            const salidasRef =
                                                                                ref(
                                                                                    db,
                                                                                    "salidas"
                                                                                );
                                                                            const newSalidasRef =
                                                                                push(
                                                                                    salidasRef
                                                                                );

                                                                            set(
                                                                                newSalidasRef,
                                                                                {
                                                                                    cantidadTotal:
                                                                                        cantidadTotal,
                                                                                    precioVenta:
                                                                                        precioVentaTable,
                                                                                    fechaSalida:
                                                                                        formattedDate,
                                                                                    idInventario:
                                                                                        indexInventory,
                                                                                    user: user,
                                                                                }
                                                                            );

                                                                            updateTable();

                                                                            $(
                                                                                "#sellProduct"
                                                                            ).modal(
                                                                                "hide"
                                                                            );
                                                                            $(
                                                                                "#sellProduct"
                                                                            ).on(
                                                                                "hidden.bs.modal",
                                                                                function () {
                                                                                    $(
                                                                                        "#productFormSell"
                                                                                    )[0].reset();
                                                                                }
                                                                            );

                                                                            Swal.fire(
                                                                                {
                                                                                    title: "¡Producto Vendido!",
                                                                                    text: "El producto fue vendido exitosamente.",
                                                                                    icon: "success",
                                                                                    confirmButtonText:
                                                                                        "Aceptar",
                                                                                    timer: 2000,
                                                                                    showConfirmButton: false,
                                                                                }
                                                                            );
                                                                        }
                                                                    }
                                                                }
                                                            );
                                                        } else {
                                                            console.log(
                                                                "No data available"
                                                            );
                                                        }
                                                    })
                                                    .catch((error) => {
                                                        console.error(error);
                                                    });
                                            });
                                    }
                                );

                                $('#kardexPDF').click(function () {
                                    generarPDF();
                                });
                            }
                        }
                    });
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error("Error al Validar Usuario", error);
            });
    }
}

function updateTable() {
    table.clear().draw(); // Limpiar la tabla principal
    tableIn.clear().draw(); // Limpiar tabla de ingresos
    tableOut.clear().draw(); // Limpiar tabla de salidas

    countInventory = 0;
    countIn = 0;
    countOut = 0;
    get(child(db, `inventarios`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                $.each(
                    snapshot.val(),
                    function (indexInventory, valueInventory) {
                        if (valueInventory != null) {
                            countInventory++;
                            var col1 = countInventory;
                            var col2 = valueInventory.articulo;
                            var col3 = valueInventory.detalle;
                            var col5 = valueInventory.precioVenta;
                            if (valueInventory.cantidadTotal == 0) {
                                var col4 =
                                    '<span class="text-danger fw-bold">' +
                                    valueInventory.cantidadTotal +
                                    "</span>";
                                var col6 =
                                    '<button type="button" class="btn btn-sm btn-primary rounded m-1 inventoryAdd" data-id="' +
                                    indexInventory +
                                    '"> Ingreso</button>' +
                                    '<button type="button" class="btn btn-sm btn-warning rounded m-1 inventoryUpdate" data-id="' +
                                    indexInventory +
                                    '"> Modificar</button> ';
                            } else {
                                var col4 = valueInventory.cantidadTotal;
                                var col6 =
                                    '<button type="button" class="btn btn-sm btn-primary rounded m-1 inventoryAdd" data-id="' +
                                    indexInventory +
                                    '"> Ingreso</button>' +
                                    '<button type="button" class="btn btn-sm btn-warning rounded m-1 inventoryUpdate" data-id="' +
                                    indexInventory +
                                    '"> Modificar</button> ' +
                                    '<button type="button" class="btn btn-sm btn-success rounded m-1 inventorySell" data-id="' +
                                    indexInventory +
                                    '"> Salida</button>';
                            }

                            table.row
                                .add([col1, col2, col3, col4, col5, col6])
                                .draw();

                            get(child(db, `entradas`))
                                .then((snapshot) => {
                                    if (snapshot.exists()) {
                                        $.each(
                                            snapshot.val(),
                                            function (indexIn, valueIn) {
                                                if (valueIn != null) {
                                                    if (
                                                        valueIn.idInventario ==
                                                        indexInventory
                                                    ) {
                                                        countIn++;
                                                        var col1 = countIn;
                                                        var col2 =
                                                            valueInventory.articulo;
                                                        var col3 =
                                                            valueInventory.detalle;
                                                        var col4 =
                                                            valueIn.cantidadTotal;
                                                        var col5 =
                                                            valueIn.precioCompra;
                                                        var col6 =
                                                            valueIn.fechaIngreso;

                                                        tableIn.row
                                                            .add([
                                                                col1,
                                                                col2,
                                                                col3,
                                                                col4,
                                                                col5,
                                                                col6,
                                                            ])
                                                            .draw();
                                                    }
                                                }
                                            }
                                        );
                                    } else {
                                        console.log("No data available");
                                    }
                                })
                                .catch((error) => {
                                    console.error(error);
                                });

                            get(child(db, `salidas`))
                                .then((snapshot) => {
                                    if (snapshot.exists()) {
                                        $.each(
                                            snapshot.val(),
                                            function (indexOut, valueOut) {
                                                if (valueOut != null) {
                                                    if (
                                                        valueOut.idInventario ==
                                                        indexInventory
                                                    ) {
                                                        countOut++;
                                                        var col1 = countOut;
                                                        var col2 =
                                                            valueInventory.articulo;
                                                        var col3 =
                                                            valueInventory.detalle;
                                                        var col4 =
                                                            valueOut.cantidadTotal;
                                                        var col5 =
                                                            valueOut.precioVenta;
                                                        var col6 =
                                                            valueOut.fechaSalida;

                                                        tableOut.row
                                                            .add([
                                                                col1,
                                                                col2,
                                                                col3,
                                                                col4,
                                                                col5,
                                                                col6,
                                                            ])
                                                            .draw();
                                                    }
                                                }
                                            }
                                        );
                                    } else {
                                        console.log("No data available");
                                    }
                                })
                                .catch((error) => {
                                    console.error(error);
                                });
                        }
                    }
                );
            } else {
                console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

// ✅ Establecer la fecha actual en el HTML
document.getElementById("fecha").innerText = new Date().toLocaleDateString();

// ✅ Función para generar el PDF
function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("landscape"); // 📌 Cambiamos a orientación horizontal

    // 🎨 Configuración del PDF
    doc.setFont("courier", "bold");
    doc.setFontSize(16);
    doc.text("Kardex de Inventario", 148, 15, null, null, "center"); // 📌 Ajustado al centro en landscape

    // 📅 Fecha
    doc.setFontSize(12);
    doc.text(
        `Fecha: ${new Date().toLocaleDateString()}`,
        148,
        25,
        null,
        null,
        "center"
    ); // 📌 Ajustado al centro en landscape

    // 🏗️ Posiciones iniciales
    let startY = 40;
    let startX = 10;
    let rowHeight = 10;
    let colWidths = [15, 80, 30, 30, 30, 30, 30, 30]; // 📌 Ancho ajustado a landscape

    // 🖍️ Dibujar primera fila de encabezados sin bordes ("Entradas" y "Salidas")
    doc.setFontSize(10);
    doc.text(
        "Entradas",
        startX +
            colWidths[0] +
            colWidths[1] +
            (colWidths[2] + colWidths[3] + colWidths[4]) / 2,
        startY + 7,
        null,
        null,
        "center"
    );
    doc.text(
        "Salidas",
        startX +
            colWidths[0] +
            colWidths[1] +
            colWidths[2] +
            colWidths[3] +
            colWidths[4] +
            (colWidths[5] + colWidths[6] + colWidths[7]) / 2,
        startY + 7,
        null,
        null,
        "center"
    );

    startY += rowHeight;

    // 🖍️ Dibujar segunda fila de encabezados con bordes
    let headers = [
        "N°",
        "Detalle",
        "Cantidad",
        "V. Unitario",
        "V. Total",
        "Cantidad",
        "V. Unitario",
        "V. Total",
    ];
    let xPos = startX;

    headers.forEach((header, index) => {
        doc.rect(xPos, startY, colWidths[index], rowHeight);
        doc.text(
            header,
            xPos + colWidths[index] / 2,
            startY + 7,
            null,
            null,
            "center"
        );
        xPos += colWidths[index];
    });

    startY += rowHeight;

    let contReport = 0;
    var pdfEntradasTotal = 0;
    var pdfSalidasTotal = 0;

    // 🔥 Obtener datos de "report"
    get(child(db, `report`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                // ✅ Asegurar que la tabla se limpia antes de insertar datos
                $("#kardexTable thead").empty();
                $("#kardexTable thead").append(`<tr>
                    <th colspan="2"></th>
                    <th colspan="3">Entradas</th>
                    <th colspan="3">Salidas</th>
                </tr>
                <tr>
                    <th>N°</th>
                    <th>Detalle</th>
                    <th>Cantidad</th>
                    <th>V. Unitario</th>
                    <th>V. Total</th>
                    <th>Cantidad</th>
                    <th>V. Unitario</th>
                    <th>V. Total</th>
                </tr>`);

                $.each(snapshot.val(), function (indexReport, valueReport) {
                    contReport++;
                    $("#kardexTable thead").append(
                        `<tr>
                            <th>${contReport}</th>
                            <th>${valueReport.articulo}</th>
                            <th>${valueReport.cantidadEntrada}</th>
                            <th>${parseFloat(
                                valueReport.precioEntradaVU || 0
                            ).toFixed(2)}</th>
                            <th>${parseFloat(
                                valueReport.precioEntradaVT || 0
                            ).toFixed(2)}</th>
                            <th>${valueReport.cantidadSalida}</th>
                            <th>${parseFloat(
                                valueReport.precioSalidaVU || 0
                            ).toFixed(2)}</th>
                            <th>${parseFloat(
                                valueReport.precioSalidaVT || 0
                            ).toFixed(2)}</th>
                        </tr>`
                    );

                    pdfEntradasTotal += parseFloat(
                        valueReport.precioEntradaVT || 0
                    );
                    pdfSalidasTotal += parseFloat(
                        valueReport.precioSalidaVT || 0
                    );

                    xPos = startX;

                    // 🖍️ Dibujar fila de datos
                    let row = [
                        contReport,
                        valueReport.articulo,
                        valueReport.cantidadEntrada,
                        parseFloat(valueReport.precioEntradaVU || 0).toFixed(2),
                        parseFloat(valueReport.precioEntradaVT || 0).toFixed(2),
                        valueReport.cantidadSalida,
                        parseFloat(valueReport.precioSalidaVU || 0).toFixed(2),
                        parseFloat(valueReport.precioSalidaVT || 0).toFixed(2),
                    ];

                    row.forEach((cell, index) => {
                        doc.rect(xPos, startY, colWidths[index], rowHeight);

                        // Alinear "Detalle" a la izquierda, el resto centrado
                        let align = index === 1 ? "left" : "center";
                        let textX =
                            index === 1
                                ? xPos + 2
                                : xPos + colWidths[index] / 2;

                        doc.text(
                            String(cell),
                            textX,
                            startY + 7,
                            null,
                            null,
                            align
                        );
                        xPos += colWidths[index];
                    });

                    startY += rowHeight;
                });

                // 🏗️ Dibujar fila de Total
                xPos = startX;
                let totalRow = [
                    "Total",
                    "-",
                    "-",
                    "-",
                    pdfEntradasTotal.toFixed(2),
                    "-",
                    "-",
                    pdfSalidasTotal.toFixed(2),
                ];
                totalRow.forEach((cell, index) => {
                    doc.rect(xPos, startY, colWidths[index], rowHeight);
                    doc.text(
                        String(cell),
                        xPos + colWidths[index] / 2,
                        startY + 7,
                        null,
                        null,
                        "center"
                    );
                    xPos += colWidths[index];
                });

                // 🏁 Abrir en una nueva pestaña
                const today = new Date();
                const formattedDate = today.toISOString().split("T")[0]; // 📌 Convierte a formato YYYY-MM-DD
                const fileName = `Kardex_${formattedDate}.pdf`;
                doc.save(fileName);

                $("#kardexTable thead").append(
                    `<tr>
                    <th colspan="2">Total</th>
                    <th>-</th>
                    <th>-</th>
                    <th>${parseFloat(pdfEntradasTotal || 0).toFixed(2)}</th>
                    <th>-</th>
                    <th>-</th>
                    <th>${parseFloat(pdfSalidasTotal || 0).toFixed(2)}</th>
                </tr>`
                );
            }
        })
        .catch((error) => {
            console.error("Error obteniendo datos de report:", error);
        });
}

function lock() {
    get(child(db, `inventarios`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                $.each(
                    snapshot.val(),
                    function (indexInventory, valueInventory) {
                        if (valueInventory != null) {
                            countInventory++;
                            var col1 = countInventory;
                            var col2 = valueInventory.articulo;
                            var col3 = valueInventory.detalle;
                            var col5 = valueInventory.precioVenta;
                            if (valueInventory.cantidadTotal > 0) {
                                var col4 = valueInventory.cantidadTotal;
                                var col6 = "Locked";
                            } else {
                                var col4 =
                                    '<span class="text-danger fw-bold">¡Agotado!</span>';
                                var col6 = "Locked";
                            }

                            table.row
                                .add([col1, col2, col3, col4, col5, col6])
                                .draw();

                            get(child(db, `entradas`))
                                .then((snapshot) => {
                                    if (snapshot.exists()) {
                                        $.each(
                                            snapshot.val(),
                                            function (indexIn, valueIn) {
                                                if (valueIn != null) {
                                                    if (
                                                        valueIn.idInventario ==
                                                        indexInventory
                                                    ) {
                                                        countIn++;
                                                        var col1 = countIn;
                                                        var col2 =
                                                            valueInventory.articulo;
                                                        var col3 =
                                                            valueInventory.detalle;
                                                        var col4 =
                                                            valueIn.cantidadTotal;
                                                        var col5 =
                                                            valueIn.precioCompra;
                                                        var col6 =
                                                            valueIn.fechaIngreso;

                                                        tableIn.row
                                                            .add([
                                                                col1,
                                                                col2,
                                                                col3,
                                                                col4,
                                                                col5,
                                                                col6,
                                                            ])
                                                            .draw();
                                                    }
                                                }
                                            }
                                        );
                                    } else {
                                        console.log("No data available");
                                    }
                                })
                                .catch((error) => {
                                    console.error(error);
                                });

                            get(child(db, `salidas`))
                                .then((snapshot) => {
                                    if (snapshot.exists()) {
                                        $.each(
                                            snapshot.val(),
                                            function (indexOut, valueOut) {
                                                if (valueOut != null) {
                                                    if (
                                                        valueOut.idInventario ==
                                                        indexInventory
                                                    ) {
                                                        countOut++;
                                                        var col1 = countOut;
                                                        var col2 =
                                                            valueInventory.articulo;
                                                        var col3 =
                                                            valueInventory.detalle;
                                                        var col4 =
                                                            valueOut.cantidadTotal;
                                                        var col5 =
                                                            valueOut.precioVenta;
                                                        var col6 =
                                                            valueOut.fechaSalida;

                                                        tableOut.row
                                                            .add([
                                                                col1,
                                                                col2,
                                                                col3,
                                                                col4,
                                                                col5,
                                                                col6,
                                                            ])
                                                            .draw();
                                                    }
                                                }
                                            }
                                        );
                                    } else {
                                        console.log("No data available");
                                    }
                                })
                                .catch((error) => {
                                    console.error(error);
                                });
                        }
                    }
                );
            } else {
                console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

$("#lock").click(function () {
    $("#component-newProduct").empty();
    $("#lock").prop("hidden", true).hide();
    $("#unlock").show();

    table.clear();
    tableIn.clear();
    tableOut.clear();
    countInventory = 0;
    countIn = 0;
    countOut = 0;

    lock();

    Swal.fire({
        title: "Sesión Cerrada 🔒",
        text: `¡Hasta Pronto!`,
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
    });
});

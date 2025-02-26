<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])


    <!--  Datatables  -->
    <link rel="stylesheet" href="//cdn.datatables.net/2.2.2/css/dataTables.dataTables.min.css" />

    <title>Kardex App</title>

    <style>
        #pdf-content {
            font-family: Arial, sans-serif;
            text-align: center;
        }

        .header-section {
            margin-bottom: 20px;
        }

        .kardex-table {
            width: 100%;
            border-collapse: collapse;
            margin: auto;
        }

        .kardex-table,
        .kardex-table th,
        .kardex-table td {
            border: 1px solid black;
            padding: 8px;
            text-align: center;
        }

        .kardex-table td:nth-child(2) {
            text-align: left;
        }

        /* Alinear "Detalle" a la izquierda */
        th {
            background-color: #ddd;
        }
    </style>
</head>

<body>
    <div id="modal-content">
        <div class="modal fade" id="newProduct" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="scrollableLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="scrollableLabel">Nuevo Producto</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="productFormNew">
                        <div class="modal-body">
                            <input id="id" type="hidden" />
                            <div class="form-group mb-2">
                                <label for="product_name">Producto</label>
                                <input type="text" id="articulo" name="articulo" class="form-control" value="" required
                                    oninput="this.value = this.value.toUpperCase()" />
                            </div>
                            <div class="form-group mb-2">
                                <label for="product_description">Descripción</label>
                                <textarea id="detalle" name="detalle" class="form-control" required
                                    oninput="this.value = this.value.toUpperCase()"></textarea>
                            </div>
                            <div class="form-group mb-2">
                                <label for="current_quantity">Cantidad</label>
                                <input type="number" id="cantidadTotal" name="cantidadTotal" class="form-control" value="" step="1"
                                    min="0" max="9999" required />
                            </div>
                            <div class="form-group mb-2" id="precioCompraDiv">
                                <label for="current_quantity">Precio Compra</label>
                                <input type="number" id="precioCompra" name="precioCompra" class="form-control" value="" step="00.01"
                                    min="00.00" max="9999.99" required />
                            </div>

                            <div class="form-group mb-2" id="precioVentaDiv">
                                <label for="current_quantity">Precio Venta</label>
                                <input type="number" id="precioVenta" name="precioVenta" class="form-control" value="" step="00.01"
                                    min="00.00" max="9999.99" required />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">
                                Cerrar
                            </button>
                            <button type="submit" id="saveProduct" class="btn btn-success">
                                Agregar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal fade" id="addProduct" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="scrollableLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="scrollableLabel">Aumentar Producto</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="productFormAdd">
                        <div class="modal-body">
                            <input id="idAdd" type="hidden" />
                            <div class="form-group mb-2">
                                <label for="product_name">Producto</label>
                                <input type="text" id="articuloAdd" name="articulo" class="form-control" value="" required
                                    oninput="this.value = this.value.toUpperCase()" />
                            </div>
                            <div class="form-group mb-2">
                                <label for="product_description">Descripción</label>
                                <textarea id="detalleAdd" name="detalle" class="form-control" value="" required
                                    oninput="this.value = this.value.toUpperCase()"></textarea>
                            </div>
                            <div class="form-group mb-2">
                                <label for="current_quantity">Cantidad a Aumentar</label>
                                <input type="number" id="cantidadTotalAdd" name="cantidadTotal" class="form-control" value="" step="1"
                                    min="0" max="9999" required />
                            </div>
                            <div class="form-group mb-2" id="precioCompraDiv">
                                <label for="current_quantity">Precio Compra</label>
                                <input type="number" id="precioCompraAdd" name="precioCompra" class="form-control" value="" step="00.01"
                                    min="00.00" max="9999.99" required />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">
                                Cerrar
                            </button>
                            <button type="submit" id="saveProduct" class="btn btn-success">
                                Adicionar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal fade" id="updateProduct" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="scrollableLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="scrollableLabel">Modificar Producto</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="productFormUpdate">
                        <div class="modal-body">
                            <input id="idUpdate" type="hidden" />
                            <div class="form-group mb-2">
                                <label for="product_name">Producto</label>
                                <input type="text" id="articuloUpdate" name="articulo" class="form-control" value="" required
                                    oninput="this.value = this.value.toUpperCase()" />
                            </div>
                            <div class="form-group mb-2">
                                <label for="product_description">Descripción</label>
                                <textarea id="detalleUpdate" name="detalle" class="form-control" required
                                    oninput="this.value = this.value.toUpperCase()"></textarea>
                            </div>
                            <div class="form-group mb-2">
                                <label for="current_quantity">Cantidad</label>
                                <input type="number" id="cantidadTotalUpdate" name="cantidadTotal" class="form-control" value=""
                                    step="1" min="0" max="9999" required />
                            </div>

                            <div class="form-group mb-2" id="precioVentaDiv">
                                <label for="current_quantity">Precio Venta</label>
                                <input type="number" id="precioVentaUpdate" name="precioVenta" class="form-control" value=""
                                    step="00.01" min="00.00" max="9999.99" required />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">
                                Cerrar
                            </button>
                            <button type="submit" id="saveProduct" class="btn btn-success">
                                Modificar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal fade" id="sellProduct" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="scrollableLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="scrollableLabel">Vender Producto</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="productFormSell">
                        <div class="modal-body">
                            <input id="idSell" type="hidden" />
                            <div class="form-group mb-2">
                                <label for="product_name">Producto</label>
                                <input type="text" id="articuloSell" name="articulo" class="form-control" value="" required
                                    oninput="this.value = this.value.toUpperCase()" />
                            </div>
                            <div class="form-group mb-2">
                                <label for="product_description">Descripción</label>
                                <textarea id="detalleSell" name="detalle" class="form-control" required
                                    oninput="this.value = this.value.toUpperCase()"></textarea>
                            </div>
                            <div class="form-group mb-2">
                                <label for="current_quantity">Cantidad a Vender</label>
                                <input type="number" id="cantidadTotalSell" name="cantidadTotal" class="form-control" value="" step="1"
                                    min="0" max="9999" required />
                            </div>
                            <div class="form-group mb-2" id="precioVentaDiv">
                                <label for="current_quantity">Precio Venta</label>
                                <input type="number" id="precioVentaSell" name="precioVenta" class="form-control" value="" step="00.01"
                                    min="00.00" max="9999.99" required />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">
                                Cerrar
                            </button>
                            <button type="submit" id="saveProduct" class="btn btn-success">
                                Vender
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div id="pdf-content" hidden>
        <div class="header-section">
            <h1>Kardex de Inventario</h1>
            <p>Fecha: <span id="fecha"></span></p>
            <button type="button" class="btn btn-primary" id="downloadPDF">Descargar PDF</button>
        </div>
    </div>

    <!-- MAIN CONTAINER -->
    <div class="main-container">
        <div class="col-xxl-12 col-12">
            <div class="card">
                <div class="card-body d-flex justify-content-start" id="unlockDiv">
                    <button type="button" class="btn btn-primary rounded m-1" id="unlock">
                        Acceder
                    </button>
                    <button type="button" class="btn btn-primary rounded m-1" id="lock" hidden>Salir</button>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="custom-tabs-container w-100">
                        <ul class="nav nav-tabs" id="customTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="tab-one" data-bs-toggle="tab" href="#one" role="tab" aria-controls="one"
                                    aria-selected="true">Inventario</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="tab-two" data-bs-toggle="tab" href="#two" role="tab" aria-controls="two"
                                    aria-selected="false">Entradas</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="tab-three" data-bs-toggle="tab" href="#three" role="tab" aria-controls="three"
                                    aria-selected="false">Salidas</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="customTabContent">
                            <div class="tab-pane fade show active" id="one" role="tabpanel">
                                <div class="row gutters">
                                    <div class="col-12 col-md-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <div id="component-newProduct" class="d-flex justify-content-between align-items-center m-1"></div>

                                                <div class="table-responsive w-100">
                                                    <table class="table table-bordered" id="inventoryTable" style="width: 100%">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Artículo</th>
                                                                <th>Detalle</th>
                                                                <th>Cantidad</th>
                                                                <th>Precio</th>
                                                                <th>Acciones</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody></tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="two" role="tabpanel">
                                <div class="row gutters">
                                    <div class="col-12 col-md-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="table-responsive w-100">
                                                    <table class="table table-striped" id="inTable" style="width: 100%">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Artículo</th>
                                                                <th>Detalle</th>
                                                                <th>Cantidad</th>
                                                                <th>Precio</th>
                                                                <th>Fecha</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody></tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="three" role="tabpanel">
                                <div class="row gutters">
                                    <div class="col-12 col-md-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="table-responsive w-100">
                                                    <table class="table table-striped" id="outTable" style="width: 100%">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Artículo</th>
                                                                <th>Detalle</th>
                                                                <th>Cantidad</th>
                                                                <th>Precio</th>
                                                                <th>Fecha</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody></tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

    <!-- {{-- Datatable JS --}} -->
    <script src="//cdn.datatables.net/2.2.2/js/dataTables.min.js"></script>

    <!-- SWEET ALERT 2 -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <!-- JS PDF -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.29/jspdf.plugin.autotable.min.js"></script>

</body>

</html>
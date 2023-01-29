import './formulario.css'

export function Formulario(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well well-sm">
                        <h2 className="text-center header">Contactos</h2>
                        <form className="form-horizontal" method="post">
                            <fieldset>
                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="fname" name="name" type="text" placeholder="Nombre" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="lname" name="name" type="text" placeholder="Apellido" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="email" name="email" type="text" placeholder="Email" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="phone" name="phone" type="text" placeholder="Teléfono" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square bigicon"></i></span>
                                    <div className="col-md-8">
                                        <textarea className="form-control" id="message" name="message" placeholder="Introduzca aquí su masaje para nosotros. Nos pondremos en contacto con usted en un plazo de 2 días." rows="7"></textarea>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-6 text-center">
                                        <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
agregar(nuevoNodo){
        if( nuevoNodo == null){
        this.primero = nuevoNodo;
        }else{
            if(nuevoNodo.prioridad > this.primero.prioridad){
                let ultimo = this.primero;
                this.primero = nuevoNodo;
                this.primero.siguiente = ultimo;
            }else{
            this.agregarNodo(this.primero, nodo);
            }
        }
    }

agregarNodo(ultimo, ultimo){
        if(ultimo.prioridad>ultimo.prioridad){
             ultimo.siguiente = ultimo;
             var a = this._inicio;
             while(a.siguiente != ultimo){
                 a=a.siguiente;
             }
             a.siguiente=ultimo;
        }
        else{
            if(ultimo.siguiente==null){
                ultimo.siguiente=ultimo;
            }
            else{
                _agregarNodo(ultimo, ultimo.siguiente)
            }
        }
     }
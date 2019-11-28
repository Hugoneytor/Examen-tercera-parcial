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



    agregarNodo(ultimo, nuevo){
        if(ultimo.prioridad>nuevo.prioridad){
             ultimo.siguiente = nuevo;
             var a = this._inicio;
             while(a.siguiente != nuevo){
                 a=a.siguiente;
             }
             a.siguiente=ultimo;
        }
        else{
            if(nuevo.siguiente==null){
                nuevo.siguiente=ultimo;
            }
            else{
                agregarNodo(ultimo, nuevo.siguiente)
            }
        }
     }
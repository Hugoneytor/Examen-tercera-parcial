agregar(nuevoNodo){
        if( nuevoNodo == null){
        this.primero = nuevoNodo;
        }else{
            if(nuevoNodo.prioridad > this.primero.prioridad){
                let ultimo = this.primero;
                this.primero = nuevoNodo;
                this.primero.siguiente = ultimo;
            }else{
            this.agregarNodo(nodo, this.primero);
            }
        }
    }



    agregarNodo(nuevo, ultimo){
        if(nuevo.prioridad>ultimo.prioridad){
             nuevo.siguiente = ultimo;
             var a = this._inicio;
             while(a.siguiente != ultimo){
                 a=a.siguiente;
             }
             a.siguiente=nuevo;
        }
        else{
            if(ultimo.siguiente==null){
                ultimo.siguiente=nuevo;
            }
            else{
                agregarNodo(nuevo, ultimo.siguiente)
            }
        }
     }
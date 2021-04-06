const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  

  let contador = 0
  let lista= new Array()

  const counter ={
    val:0,
    inc: function () {this.val++;console.log(this.val)},
    dec: function () {this.val--;console.log(this.val)},
    most: function () {uncheckedCountSpan.innerHTML=this.val}
  }

  function comprueba(id){
    console.log(id.checked)
    if(id.checked==true){
      counter.inc()
      counter.most()
    }
    else{
      counter.dec()
      counter.most()
    }
  }

  function addTodo() {
    const tituloTarea = prompt('Que tarea quieres agregar?')
    if (tituloTarea != undefined){
      contador++
      itemCountSpan.innerHTML = contador
      counter.val=0
      uncheckedCountSpan.innerHTML=counter.val
      let text = "<input type=checkbox onChange=comprueba(id"+contador+") id=id"+contador+"><label> " + tituloTarea + "</label>";
      lista.push(text)
      text = "<p>";
      for (var i = 0; i < lista.length; i++) {
        text += "<p>" + lista[i] + "</p>";
        }
      list.innerHTML= text
    }
  }
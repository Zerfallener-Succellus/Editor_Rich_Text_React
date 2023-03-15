import { useState } from 'react';
function formatarListaNumerada() {
  const editor = document.getElementById("page");
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const list = document.createElement("ol");
  const listItem = document.createElement("li");
  const text = document.createTextNode(range.toString());
  list.classList.add("list-decimal");
  listItem.appendChild(text);
  list.appendChild(listItem);
  list.setAttribute('start', '1'); // adiciona o atributo start com valor 1
  range.deleteContents();
  range.insertNode(list);
  editor.focus();
}

function formatarListaComMarcadores() {
  const editor = document.getElementById("page");
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const list = document.createElement("ul");
  const listItem = document.createElement("li");
  const text = document.createTextNode(range.toString());
  listItem.appendChild(text);
  list.appendChild(listItem);
  list.style.listStyleType = 'disc'; // adiciona o estilo do marcador
  range.deleteContents();
  range.insertNode(list);
  editor.focus();
}

function Teste() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-yellow-300 to-green-400">
      
        <button className="utilitie-icon" onClick={formatarListaNumerada}>1</button>
          <button className="utilitie-icon" onClick={formatarListaComMarcadores}>M</button>
        

       
          <div id='page' className="h-full w-full bg-white text-gray-800 focus:outline-none  scrollbar-track-gray-100 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-stone-500 " contentEditable={true}></div>
       
        <div>
        <ol className='list-decimal'>
  <li>primeiro item</li>
  <li>segundo item</li>
  <li>terceiro item</li>
</ol>
        </div>
      </div>
    
  );
}

export default Teste;
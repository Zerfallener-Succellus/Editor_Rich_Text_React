import { useState } from 'react';
import jsPDF from 'jspdf';


function formatarNegrito() {
  const editor = document.getElementById("page");
  const range = window.getSelection().getRangeAt(0);
  const bold = document.createElement("b");
  bold.textContent = range.toString();
  range.deleteContents();
  range.insertNode(bold);
  editor.focus();
}

function formatarItalico() {
  const editor = document.getElementById("page");
  const range = window.getSelection().getRangeAt(0);
  const italic = document.createElement("i");
  italic.textContent = range.toString();
  italic.style.fontStyle = "italic";
  range.deleteContents();
  range.insertNode(italic);
  editor.focus();
}

function formatarSublinhado() {
  const editor = document.getElementById("page");
  const range = window.getSelection().getRangeAt(0);
  const underline = document.createElement("u");
  underline.textContent = range.toString();
  range.deleteContents();
  range.insertNode(underline);
  editor.focus();
}

function formatarTachado() {
  const editor = document.getElementById("page");
  const range = window.getSelection().getRangeAt(0);
  const strike = document.createElement("strike");
  strike.textContent = range.toString();
  
  range.deleteContents();
  range.insertNode(strike);
  editor.focus();
}

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
 list.style.listStyleType = 'disc !important';
  listItem.appendChild(text);
  list.appendChild(listItem);
  list.classList.add("my-list-disc"); // adiciona a classe personalizada
  range.deleteContents();
  range.insertNode(list);
  
  editor.focus();
}

function centralizarTexto() {
  const editor = document.getElementById("page");
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const div = document.createElement("div");
  const text = document.createTextNode(range.toString());
 
  div.appendChild(text);
  div.style.textAlign = 'center'; // adiciona a propriedade para centralizar
  range.deleteContents();
  range.insertNode(div);
  
  editor.focus();
}

function alinharDireita() {
  const editor = document.getElementById("page");
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const div = document.createElement("div");
  const text = document.createTextNode(range.toString());
 
  div.appendChild(text);
  div.style.float = 'right'; // adiciona a propriedade para alinhar à direita
  range.deleteContents();
  range.insertNode(div);
  
  editor.focus();
}

function alinharEsquerda() {
  const editor = document.getElementById("page");
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const div = document.createElement("div");
  const text = document.createTextNode(range.toString());
 
  div.appendChild(text);
  div.style.float = 'left'; // adiciona a propriedade para alinhar à esquerda
  range.deleteContents();
  range.insertNode(div);
  
  editor.focus();
}

function transformarEmTitulo() {
  const editor = document.getElementById("page");
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const titulo = document.createElement("h1");
  const text = document.createTextNode(range.toString());
  
  titulo.appendChild(text);
  titulo.classList.add("font-bold", "text-3xl"); // adicionando as classes
  range.deleteContents();
  range.insertNode(titulo);
  
  editor.focus();
}


function transformarEmLink() {
  const editor = document.getElementById("page");
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const link = document.createElement("a");
  const text = document.createTextNode(range.toString());
  link.appendChild(text);
  link.href = "#"; // altere o valor para a URL desejada
  link.classList.add("text-blue-500", "underline", "hover:underline");
  range.deleteContents();
  range.insertNode(link);
  editor.focus();
}

function transformarEmCitacao() {
  const editor = document.getElementById("page");
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const citacao = document.createElement("blockquote");
  const text = document.createTextNode('"' + range.toString() + '"');
  citacao.appendChild(text);
  range.deleteContents();
  range.insertNode(citacao);
  editor.focus();
}

function dowloadTexto(){
  var pdf = new jsPDF();
  var html = document.getElementById('page').innerHTML;
  pdf.html(html, {
    callback: function () {
      pdf.save('meu-arquivo.pdf');
    }
  });

}






function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-400 to-purple-700">
      <div className="bg-white shadow-lg rounded-md p-4 h-4/5 w-2/3">
      
        <div className="flex items-center justify-center space-x-4 ">
        <div className='space-x-4 mb-4'>
          <button className="utilitie-icon" onClick={transformarEmTitulo}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className=' w-4 h-4'><path d="M0 64C0 46.3 14.3 32 32 32H80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H112V208H336V96H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h48 48c17.7 0 32 14.3 32 32s-14.3 32-32 32H400V240 416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H368 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V272H112V416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V240 96H32C14.3 96 0 81.7 0 64z"/></svg>
          </button>
          <button className="utilitie-icon" onClick={formatarNegrito}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className=' w-4 h-4'><path d="M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z"/></svg>
          </button>
          <button className="utilitie-icon" onClick={formatarItalico}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className=' w-4 h-4'><path d="M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z"/></svg>
          </button>
          <button className="utilitie-icon" onClick={formatarSublinhado}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className=' w-4 h-4'><path d="M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"/></svg>
          </button>
          <button className="utilitie-icon" onClick={formatarTachado}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=' w-4 h-4'><path d="M161.3 144c3.2-17.2 14-30.1 33.7-38.6c21.1-9 51.8-12.3 88.6-6.5c11.9 1.9 48.8 9.1 60.1 12c17.1 4.5 34.6-5.6 39.2-22.7s-5.6-34.6-22.7-39.2c-14.3-3.8-53.6-11.4-66.6-13.4c-44.7-7-88.3-4.2-123.7 10.9c-36.5 15.6-64.4 44.8-71.8 87.3c-.1 .6-.2 1.1-.2 1.7c-2.8 23.9 .5 45.6 10.1 64.6c4.5 9 10.2 16.9 16.7 23.9H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H270.1c-.1 0-.3-.1-.4-.1l-1.1-.3c-36-10.8-65.2-19.6-85.2-33.1c-9.3-6.3-15-12.6-18.2-19.1c-3.1-6.1-5.2-14.6-3.8-27.4zM348.9 337.2c2.7 6.5 4.4 15.8 1.9 30.1c-3 17.6-13.8 30.8-33.9 39.4c-21.1 9-51.7 12.3-88.5 6.5c-18-2.9-49.1-13.5-74.4-22.1c-5.6-1.9-11-3.7-15.9-5.4c-16.8-5.6-34.9 3.5-40.5 20.3s3.5 34.9 20.3 40.5c3.6 1.2 7.9 2.7 12.7 4.3l0 0 0 0c24.9 8.5 63.6 21.7 87.6 25.6l0 0 .2 0c44.7 7 88.3 4.2 123.7-10.9c36.5-15.6 64.4-44.8 71.8-87.3c3.6-21 2.7-40.4-3.1-58.1H335.1c7 5.6 11.4 11.2 13.9 17.2z"/></svg>
          </button>
          
        </div>

        <div className='space-x-4 mb-4 px-6' >
        <button className="utilitie-icon" onClick={formatarListaNumerada}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=' w-4 h-4'><path d="M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24V176h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24H56V80H48C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432H120c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM224 64H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
        </button>
          <button className="utilitie-icon" onClick={formatarListaComMarcadores}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=' w-4 h-4'><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>
          </button>
        </div>

        <div className='space-x-4 mb-4'>
        <button className="utilitie-icon-2" onClick={alinharEsquerda}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
</svg>
        </button>
        <button className="utilitie-icon-2" onClick={centralizarTexto}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
</svg>

        </button>
        <button className="utilitie-icon-2" onClick={alinharDireita}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
</svg>

        </button>
        </div>

        <div className='space-x-4 mb-4'>
        <button className="utilitie-icon" onClick={transformarEmCitacao}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className=' w-4 h-4'><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
        </button>
        <button className="utilitie-icon" onClick={transformarEmLink}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className=' w-4 h-4'><path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"/></svg>
        </button>
        
        </div>
        <div className='space-x-4 mb-4'>
        <button className="utilitie-icon" onClick={dowloadTexto}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=' w-4 h-4'><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>

        </button>
          </div>


        </div>
        
        <div className="border-2 border-gray-100 rounded-md bg-white h-5/6 p-2 overflow-auto focus:outline-none" >
          <div id='page' className="h-full w-full bg-white text-gray-800 focus:outline-none  scrollbar-track-gray-100 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-stone-500  p-6" contentEditable={true}></div>
        </div>
        <div>
      
        </div>
      </div>
    </div>
  );
}

export default App;
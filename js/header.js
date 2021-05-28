class Header extends HTMLElement {
    constructor() {
      super();
    }
}
    connectedCallback(){ 
      this.innerHTML = `
        <style>
        header {
            font-family: 'Proza Libre', sans-serif;
            }
        </style>
       .navbar {
            align-items: right;
           }
          ul li {
            list-style: none;
            display: inline;
          }
          
          a {
            font-weight: 700;
            margin: 0 25px;
            color: #fff;
            text-decoration: none;
          }
          
          a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #fff;
          }
          
        </style>
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> 
      
             <div class="container-fluid">
               <a href="index.html"  class="navbar-brand" ><img src="images/vaakuna.png" alt=Helsinki></a>
             
               <button class="navbar-toggler" 
               type="button" 
               data-bs-toggle="collapse" 
               data-bs-target="#navbarSupportedContent" >     
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="index.html">Etusivu</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="blogi.html">Blogi</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="kortit.html">Kortit</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="lomake.html">Lomake</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="vapaa.html">Vapaa</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="rautalanka.html">Rautalanka</a>
                   </li>
                   </ul>
                 </div>
             </div>
           </nav>
           </header>
         ` ; }
        
    customElements.define('header-component', Header);
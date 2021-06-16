import Header from '../template/Header';



const router = async()=>{
    const header =null || document.getElementById('header');

    header.innerHTML= await Header();
    
}
export default router;
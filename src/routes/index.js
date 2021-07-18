import Header from '../template/Header';
import Logo from '../template/Logo';



const router = async()=>{
    const header =null || document.getElementById('header');
    const logo = null || document.getElementById('logo');

    header.innerHTML= await Header();
    logo.innerHTML = await Logo();
    
}
export default router;
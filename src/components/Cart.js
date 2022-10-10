import '../styles/Cart.css'


function Cart() {
    const prixDumonstera = 8 ;
    const prixDuLierre = 10;
    const prixDuBouquetDeFleur = 15;
    const total =   prixDumonstera  + prixDuLierre + prixDuBouquetDeFleur;
 return   <div className="lmg-cart">    
            <h2>Panier</h2>
            <ul>
                <li>Monstera :{prixDumonstera} €</li>
                <li>Lierre: {prixDuLierre} €</li>
                <li>Bouquet de fleurs :{prixDuBouquetDeFleur} €</li>
            </ul>
                Total du panier :{total} €
             </div>
}
export default Cart
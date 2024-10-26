import image1 from "./../../public/pack1/bannerinicial.jpg";
import image2 from "./../../public/pack1/mulher.jpg";
import image3 from "./../../public/pack1/casa1.jpg";
import image4 from "./../../public/pack1/mulherfeliz.jpg";
import image5 from "./../../public/pack1/casamao.jpg";
import image6 from "./../../public/pack1/botoes.jpg";
import image7 from "./../../public/pack1/casa2.jpg";
import image8 from "./../../public/pack1/familia.jpg";
import image9 from "./../../public/pack1/sofa.jpg";
import image10 from "./../../public/pack1/casal.jpg";
import image11 from "./../../public/pack1/bannerfinal.jpg";

import image12 from "./../../public/pack2/bannerpackdois.jpg";
import image13 from "./../../public/pack2/mulher1pack2.jpg";
import image14 from "./../../public/pack2/cerebro.jpg";
import image15 from "./../../public/pack2/molier.jpg";
import image16 from "./../../public/pack2/reflex.jpg";
import image17 from "./../../public/pack2/chique1.jpg";
import image18 from "./../../public/pack2/psi.jpg";
import image19 from "./../../public/pack2/homemorando.jpg";
import image20 from "./../../public/pack2/meninonovo.jpg";
import image21 from "./../../public/pack2/mulherouvidos.jpg";
import image22 from "./../../public/pack2/obrigado.jpg";

import "./pack.css";
import PackLayout from "./packLayout";

function Pack({ packSelected }) {
    return (
        <>
            {packSelected === 1 && (
                <PackLayout
                    image1={image1}
                    image2={image2}
                    image3={image3}
                    image4={image4}
                    image5={image5}
                    image6={image6}
                    image7={image7}
                    image8={image8}
                    image9={image9}
                    image10={image10}
                    image11={image11}
                />
            )}

            {packSelected === 2 && (
                <PackLayout
                    image1={image12}
                    image2={image13}
                    image3={image14}
                    image4={image15}
                    image5={image16}
                    image6={image17}
                    image7={image18}
                    image8={image19}
                    image9={image20}
                    image10={image21}
                    image11={image22}
                />
            )}

            {/* {packSelected === 3 && (
                <PackLayout
                    image1={image23}
                    image2={image24}
                    image3={image25}
                    image4={image26}
                    image5={image27}
                    image6={image28}
                    image7={image29}
                    image8={image30}
                    image9={image31}
                    image10={image32}
                    image11={image33}
                />
            )}

            {packSelected === 4 && (
                <PackLayout
                    image1={image34}
                    image2={image35}
                    image3={image36}
                    image4={image37}
                    image5={image38}
                    image6={image39}
                    image7={image40}
                    image8={image41}
                    image9={image42}
                    image10={image43}
                    image11={image44}
                />
            )} */}
        </>
    );
}

export default Pack;

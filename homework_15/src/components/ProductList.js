import{ ProductItem } from "./ProductItem";
import styles from "./productList.module.scss";

const data =[
    {
        id : 01,
        name :"預購-夢夢水飲品-白桃風味",
        price : "1009",
        img : "https://shoplineimg.com/603ef23f71de610016764aec/615a670fd8581600260b0082/800x.webp?source_format=jpg"
    },
    {
        id : 02,
        name :"【澎湖福朋喜來登】海皇干貝XO醬",
        price : "1260",
        img : "https://shoplineimg.com/603ef23f71de610016764aec/626a68a8263e99001552c2bc/800x.webp?source_format=jpg"
    },
    {
        id : 03,
        name :"【旺旺水神】HD-4L水神微酸性電解次氯酸水生成機組合",
        price : "39900",
        img : "https://shoplineimg.com/603ef23f71de610016764aec/63296b1cc271e7001f2c3335/800x.webp?source_format=png"    
    },
    {
        id : 04,
        name :"【旺旺水神】特惠組- 漱口水250mL X 12入",
        price : "998",
        img : "https://shoplineimg.com/603ef23f71de610016764aec/63032e325164ab0019bc7062/800x.webp?source_format=png"
    },
];

export const ProductList = () =>{

    return (
        <section calssName ={styles.gird}>
            {data.map((item)=>{
                return(
                <ProductItem item={item} key={item.id}/>
                )
            })}
        </section>
    )
}
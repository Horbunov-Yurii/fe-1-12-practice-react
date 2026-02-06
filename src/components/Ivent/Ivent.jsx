export const Ivent = ({props})=> {
    return <>{
       
        props.map(({id,images,title,genre,developer,year,platform,rating})=>{
        return <li key={id}>
            <img src={images} alt={title} width="400" />
            <h3>{title}</h3>
            <h4>{genre}</h4>
            <p>{developer}</p>
            <time dateTime={year}>{year}</time>
            <p>{platform}</p>
            <p>{rating}</p>
        </li>
        })
}
</> 
}
// ytrergt
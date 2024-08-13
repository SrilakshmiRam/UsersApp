
import './index.css'

const imagesList=[
    {
      id:1,
      imageUrl:'https://res.cloudinary.com/ddiyemmt3/image/upload/v1721792066/Photo_by_Peter_Idowu_ydi1q4.png'
    },
    {
      id:2,
      imageUrl:'https://res.cloudinary.com/ddiyemmt3/image/upload/v1721792188/Photo_by_Matteo_Minoglio_ihlwmu.png'
    },
    {
      id:3,
      imageUrl:'https://res.cloudinary.com/ddiyemmt3/image/upload/v1721792317/Photo_by_Joe_Gardner_we192l.png'
    },
    {
      id:4,
      imageUrl:'https://res.cloudinary.com/ddiyemmt3/image/upload/v1721792324/Photo_by_Hayes_Potter_yxajii.png'
    }
    ,{
      id:5,
      imageUrl:'https://res.cloudinary.com/ddiyemmt3/image/upload/v1721792394/Photo_by_Amin_RK_qldmqr.png'
    }
    ,{
      id:6,
      imageUrl:'https://res.cloudinary.com/ddiyemmt3/image/upload/v1721792336/Photo_by_Franco_Figueroa_fueyjt.png'
    },
    {
      id:7,
      imageUrl:'https://res.cloudinary.com/ddiyemmt3/image/upload/v1721792345/Photo_by_Daniil_Lobachev_dib3oe.png'
    },
    {
      id:8,
      imageUrl:'https://res.cloudinary.com/ddiyemmt3/image/upload/v1721792356/Photo_by_Chris_Zhang_q2rvnj.png'
    },
    {
      id:9,
      imageUrl:'https://res.cloudinary.com/ddiyemmt3/image/upload/v1721792365/Photo_by_Brooke_Cagle_np8fof.png'
    },
    {
      id:10,
      imageUrl:'https://res.cloudinary.com/ddiyemmt3/image/upload/v1721792394/Photo_by_Amin_RK_qldmqr.png'
    }
  ]

const UserCard=props=>{
    const {details}=props
    const {company,address,email,name,phone,id}=details

    const imageObj=imagesList.find(each=>each.id===id)
    
    return(
        <li className="li-item">
            <img src={imageObj.imageUrl} alt="image-employee"
            className='image' />
            <p className='name'>{name}</p>
            <p className='email-text'>{email}</p>
            <p className='description'>{name} Works at {company.name}, {address.city} as {company.catchPhrase} {phone}</p>
        </li>
    )
}

export default UserCard
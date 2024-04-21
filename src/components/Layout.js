import './Layout.css'
import List from './List'
import pic1 from '../Images/pic1.jpg'
import pic2 from '../Images/pic2.jpg'
import pic3 from '../Images/pic3.jpg'
import pic4 from '../Images/pic4.jpg'
import pic5 from '../Images/pic5.jpg'
import pic6 from '../Images/pic6.jpg'
import pic7 from '../Images/pic7.jpg'
import pic8 from '../Images/pic8.jpg'

const ImageLists = [
{
    id: 1,
   itemImage: pic1,
   itemTitle: `Julie's Rabbit Bars`
},
{
    id: 2,
   itemImage: pic2,
   itemTitle: `The Innocent Look`
},
{
    id: 3,
   itemImage: pic3,
   itemTitle: `Big Eyed Buggy`
},
{
    id: 4,
   itemImage: pic4,
   itemTitle: `The Saint Doggo`
},
{
    id: 5,
   itemImage: pic5,
   itemTitle: `Big Eyed Buggy`
},
{
    id: 6,
   itemImage: pic6,
   itemTitle: `The Saint Doggo`
},
{
    id: 7,
   itemImage: pic7,
   itemTitle: `Big Eyed Buggy`
},
{
    id: 8,
   itemImage: pic8,
   itemTitle: `Julie's Rabbit Bars`
},

]


function Layout(){
    return(
        <>
        <div className="wrapper">
            {
                ImageLists.map((item)=>{
                    return(
                        <List key={item.id} Image={item.itemImage} Title={item.itemTitle}></List>
                    )
                })
            }
        </div>
        </>
    )
}

export default Layout;
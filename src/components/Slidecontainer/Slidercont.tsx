import  {useState,FC } from 'react'
import Slider from '../Slider';
import CharacterCard from '../CharacterCard';
import Dialog from '@material-ui/core/Dialog';
import logo from '../../images/logo512.png'


  const SliderProps = {
    zoomFactor: 10, // How much the image should zoom on hover in percent
    slideMargin: 20, // Margin on each side of slides
    maxVisibleSlides: 3,
    pageTransition: 500 // Transition when flipping pages
  };  
const  Slidercont:FC<{list:{content:[]}}>=({list})=> {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [activeCharacter, setActiveCharacter] = useState<any>({});
    const handleDialogOpen = (character: any) => {
        setIsDialogOpen(true);
        setActiveCharacter(character);
      };
 
      return (
        <div style={{display:'flex',flexDirection:'column',overflowX:'hidden'}} >
        <Dialog onClose={() => setIsDialogOpen(false)} open={isDialogOpen}>
            <CharacterCard character={activeCharacter} />
          </Dialog>
          {list&&list.content&&list.content.length!==0&&
        <Slider {...SliderProps}>
            {list.content.map((character:any) => {
              
             return  (
          
              <div key={character._id} onClick={() => handleDialogOpen(character)}>
                <img src={logo} alt='character' />
              </div>
            )
            }
            )}
          </Slider>
          }
        </div>
      );
}

export default Slidercont

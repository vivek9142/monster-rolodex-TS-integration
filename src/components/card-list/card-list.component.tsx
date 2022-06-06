import {Monster} from '../../App';
import './card-list.styles.css';
import {Card} from '../card/card.component';

type CardListProps = {
    monsters: Monster[];
}

export const CardList = (props:CardListProps) =>(
    <div className="card-list">
    {(props.monsters.map(el => (
        <Card key={el.id} monster={el}/>    
    )))}
    
    </div>
);
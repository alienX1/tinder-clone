import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from '../axios'

function TinderCards() {
    const [people, setPeople] = useState([
    {
        name: 'Joginder',
        photo: '/images/pic1.jpg'
    },
    {
        name: 'Narender',
        photo: "/images/pic2.jpg"
    },
    {
        name: 'Surender',
        photo: "/images/pic3.jpg"
    },
    {
        name: 'Thara Bhai',
        photo: "/images/pic4.jpg"
    },
    {
        name: 'Jenny',
        photo: "/images/pic5.jpg"
    },
    {
        name: 'Jagga',
        photo: "/images/pic6.jpg"
    },
    {
        name: 'Jugna',
        photo: "/images/pic7.jpg"
    },
    {
        name: 'Jugni',
        photo: "/images/pic8.jpg"
    },
    ]);

    // const [people, setPeople] = useState([]);

    // useEffect(() => {
    //     async function fetchData () {
    //         const req = await axios.get('/tinder/cards');

    //         setPeople(req.data);
    //     }

    //     fetchData();
    // }, [])

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!');
    };

    return (
        <div className='tinderCards'>

            <div className="tinderCards__cardsContainer">
                {people.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.photo})` }}
                            className='card'>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards

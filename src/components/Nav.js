import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav () {
    
    return(
        <nav className = 'nav'>
            <ul>
                <li>
                    <NavLink to = '/' exact activeClassName = 'active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/Leaderboard' activeClassName ='active'>
                        Leader Board
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/newquestion' activeClassName = 'active'>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/login' activeClassName = 'active'>
                        LOogout
                    </NavLink>
                </li>
               
            </ul>
        </nav>
    );
}
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import { getWineries } from '../../store/winery'
import { WineryCard } from '../WineryCard'
export const WineryList = () => {
    const dispatch = useDispatch();
    const wineries = useSelector((state => state.wineries))
    console.log(wineries)

    useEffect(() => {
        dispatch(getWineries())
    },[dispatch])

    return(
        <div>
            <h1>Wineries List</h1>
            <ul>
                {wineries.map(({id}) => (
                <WineryCard key={id} id={id} wineries={wineries}/>
                ))}
            </ul>

            <Switch>
                {/* <Route path="/wineries/:id">
                    <WineryPage wineries={wineries} />
                </Route> */}
            </Switch>
        </div>
    )
}

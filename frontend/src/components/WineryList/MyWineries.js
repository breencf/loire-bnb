import {useSelector} from 'react-redux';
import {Route, Switch, Link} from 'react-router-dom'

import {WineryCard} from '../WineryCard'
import {WineryPage} from '../WineryPage'

export const MyWineries = () => {
    const {wineries} = useSelector((state)=> state)
    const user = useSelector ((state) => state.sessions.user)
    const wineryArr = Object.values(wineries)

    const myWineries = wineryArr?.filter((winery) => (winery.ownerId === user.id))

    return (
        <div>
          <ul>
            {Object.values(myWineries).map((winery) => {
              return(
                <div>
                <Link to={`/wineries/${winery.id}`}>
                <WineryCard key={winery.id} id={winery.id} winery={winery} />;
                </Link>
                </div>)
            })}
          </ul>

          <Switch>
            <Route path="/wineries/:id">
              <WineryPage />
            </Route>
          </Switch>
        </div>
      );
}

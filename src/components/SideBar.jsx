import React from 'react';
import image from '../assets/images/logo-DH.png';
/* import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound'; */
import { Link/* , Route, Switch */ } from 'react-router-dom';
/* import SearchMovies from './SearchMovies'; */

export const SideBar = () => {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <a href="/">
                        <div className="sidebar-brand-icon">
                            <img className="w-100" src={image} alt="Digital House" />
                        </div>
                    </a></Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/* buscador */}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/SearchMovies">
                        <i class="fas fa-fw fa-magnifying-glass"></i>
                        <span>Buscador</span></Link>
                </li>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Generos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Ultima agregada</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Metricas</span></Link>
                </li>


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            {/* <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/SearchMovies">
                    <SearchMovies />
                </Route>
                <Route path="/GenresInDb">
                    <GenresInDb />
                </Route>
                <Route path="/LastMovieInDb">
                    <LastMovieInDb />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
                <Route component={NotFound} />
            </Switch> */}
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}

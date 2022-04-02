import React from 'react'
import { Link } from 'react-router-dom'
import {
    MdPeople,
    MdDocumentScanner,
    MdOutlineContentPaste,
    MdQueuePlayNext
} from 'react-icons/md'

const Sidebar = () => {
    return (
        <div className="col-md-2">
            <div className="sidebar-logo">
                <Link to="/"><img className="img-fluid" src={"https://thumbs.dreamstime.com/b/money-logo-template-design-vector-icon-illustration-money-logo-template-design-vector-icon-illustration-163187565.jpg"} /></Link>
            </div>
            <div className="sidebar-menu my-3">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <Link class="nav-link" to="/users">
                            <div className="icon-sidebar me-2">
                                <MdPeople />
                            </div>
                            <div className="menu-sidebar">
                                Data Users
                            </div>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/monitoringdokumens">
                            <div className="icon-sidebar me-2">
                                <MdDocumentScanner />
                            </div>
                            <div className="menu-sidebar">
                                Monitoring Dokumen
                            </div>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/laporans">
                            <div className="icon-sidebar me-2">
                                <MdOutlineContentPaste />
                            </div>
                            <div className="menu-sidebar">
                                Laporan Hasil Penilaian
                            </div>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/tindaklanjuts">
                            <div className="icon-sidebar me-2">
                                <MdQueuePlayNext />
                            </div>
                            <div className="menu-sidebar">
                                Tindak Lanjut
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
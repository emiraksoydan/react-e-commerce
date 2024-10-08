import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function HeaderUser() {

    return (
        <div className="header-user">
            <Link to={"/user-profile"}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-current">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12z">
                        </path>
                    </svg>
                </span>
            </Link>
        </div>
    )
}

export default HeaderUser
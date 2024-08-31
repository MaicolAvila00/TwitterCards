import { useState } from "react"
export function TwitterFollowCard ({Email,Name,InitialIsFollowing}) {

    //Estado de la funcion apagado o activo
    const [IsFollowing , setIsFollowing] = useState(InitialIsFollowing)

    const text=IsFollowing ? 'Following' : 'Follow'
    const buttonClass = IsFollowing
    ? 'md-follow-card-button is-following'
    : 'md-follow-card-button' 

    const handleClick=()=> { 
        setIsFollowing( !IsFollowing)
    }

    return (
        <article className='md-follow-card' >
            <header className='md-follow-card-header'>
                <img className= 'md-follow-card-img'
                src={'https://unavatar.io/${Email}s'} />
                 <div className='md-follow-card-Name'>
                 <strong >{Name}</strong>
                 <span className='md-follow-card-Email'>@{Email}</span>
                    </div>
         </header>
          <aside>
                <button className={buttonClass} onClick={handleClick}>
                <span className="md-follow-card-Text">{text}</span>
                <span className="md-follow-card-StopFollow">
                    Unfollow
                </span>
                </button>
          </aside>
      </article>                      
    )
}
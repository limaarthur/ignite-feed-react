import { ThumbsUp, Trash } from '@phosphor-icons/react'

export function Comment() {
  return (
    <div className="comment">
      <img src="https://avatars.githubusercontent.com/u/66640568?v=4" alt="" />

      <div className="commentBox">
        <div className="commentContent">
          <header>
            <div className="authorAndTime">
              <strong>Arthur Lima</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
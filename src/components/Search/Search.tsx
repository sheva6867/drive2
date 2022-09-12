import './Search.scss'


function Search() {
    return (
        <div className={'section_header'}>
            <h1>Человеческие ответы <br/>
                на автомобильные вопросы</h1>
            <h2>21 195 749 историй из личного опыта автовладельцев</h2>
            <form action="">
                <input className={'search_input'} placeholder={'Искать здесь...'} type="text"/>
                <button className={'search_btn'} type={"submit"}>Найти ответ</button>
            </form>
        </div>
    )

}

export default Search;
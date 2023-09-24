// Code Keypad Component Here

function Keypad (){
    function handleChange(e) {
        console.log('Entering password...')
    }
    return (
        <form>
            <input onChange={handleChange}
                type="password"
                name="password"
            />

        </form>
    )
}

export default Keypad;
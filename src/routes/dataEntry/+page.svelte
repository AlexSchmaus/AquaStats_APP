<script>
    function onSubmit(e) {
        
        console.log("Clicked")

        const formData = new FormData(e.target);

        const data = {}

        for (let field of formData){
            const [key, value] = field
            data[key] = value
        }

        console.log(data)
    }
    </script>



<main>
    <h1>Water paramter entry</h1>
    <p>Please enter your water parameters here. Its okay if you don't know everything, leave them blank!</p>
    <form on:submit|preventDefault={onSubmit}>
        <div>
            <label for="aquarium">Aquarium:</label>
            <select name="aquarium">
                <option value = "one">One</option>
                <option value = "two">Two</option>
            </select>
        </div>
        <div>
            <label for="temp">Temperature</label>
            <input type="text" name="temp" value=""/>
        </div>
        <div>
            <label for="ph">PH</label>
            <input type="text" name="ph" value=""/>
        </div>
        <div>
            <label for="NH3">Ammonia</label>
            <input type="text" name="NH3" value=""/>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
</main>







<style>
    form {
        display: flex;
        flex-direction: column;
        width: 300px;
    }

    form > div {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>
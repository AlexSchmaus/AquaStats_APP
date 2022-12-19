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


<p>Existing users login here</p>
<form on:submit|preventDefault={onSubmit}>
    <div>
        <label for="UserName">Username</label>
        <input type="text" id="UserName" name="UserName" value=""/>
    </div>
    <div>
        <label for="Password">Password</label>
        <input type="password" id="Password" name="password" value=""/>
    </div>
    <div>
        <button type="submit">Submit</button>
    </div>
</form>

<main>

</main>


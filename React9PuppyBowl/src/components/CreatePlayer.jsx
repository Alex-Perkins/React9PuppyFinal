//React Imports

//Component Imports

export default function CreateNewPlayer () {

    return (
<div>
<h2> Create New Player </h2>
<form>

<label class="Main">
                    Username:
                    <input
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)}
                    />
                </label>

</form>
</div>
    )
}
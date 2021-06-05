

<svelte:head>
	<title>Ben Cohen Dev</title>
</svelte:head>

<section>
    <section>
        <h1>Ben Cohen</h1>
        <h2>JS | React | Svelte</h2>
        <p>Let's talk: ben@bencohen.dev</p>
    </section>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
	body,
    html {
        font-family: 'Poppins', sans-serif;
        background: #1A2238;
    }

    section {
        width: 50vw;
        height: 100%;
        margin: auto;
        margin-top: 35vh;
        line-height: 1;
    }

    section h1 {
        font-weight: 300;
        font-size: 5em;
        color: #9DAAF2;
        margin-bottom: .25em;
    }

    section h2 {
        font-weight: 100;
        font-size: 2em;
        color: #FF6A3D;
    }

    section p {
        font-weight: 200;
        font-size: 1.5em;
        color: #F4DB7D;
    }
</style>

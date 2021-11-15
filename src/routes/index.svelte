

<svelte:head>
	<title>Ben Cohen Dev</title>
</svelte:head>

<main>
    <h1>Ben Cohen</h1>
    <h2>JS | React | Svelte</h2>
    <p>Let's talk: ben@bencohen.dev</p>
    
</main>
<section>
    <div class="links">
        <a href="https://theme.bencohen.dev">theme generator</a>
        <span>|</span>
        <a href="https://pitch.bencohen.dev">pitch generator</a>
    </div>
</section>

<style>
    section {
        display: flex
    }
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}



    main {
        width: 50vw;
        height: 100%;
        margin: auto;
        line-height: 1;
    }

    main h1 {
        font-weight: 300;
        font-size: 5em;
        color: #9DAAF2;
        margin-bottom: .25em;
    }

    main h2 {
        font-weight: 100;
        font-size: 2em;
        color: #FF6A3D;
    }

    main p {
        font-weight: 200;
        font-size: 1.5em;
        color: #F4DB7D;
    }
    .links {
		display: flex;
		width: 80%;
		justify-content: right;
	}

	a {
		margin: 0 1rem;
		text-decoration: none;
	}
	.links a,
	span {
		color: #ff6a3d;
	}
</style>

<div class="hero-text">
    <span class="hero-text-span">
        <h1>Hi, I'm Court.</h1>
        <p class='p1'>Data journalist and cartographer.</p>
        <p class="p2">This is my portfolio. &#11107;</p>
    </span>
</div>

<style>
    .hero-text {
        width: 100%;
        text-align: center;
        margin: 25% 0;
    }

    .hero-text-span {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 16px;
        padding: 2rem 1rem;
        display: inline-block;
        animation: fadeInUp 1s ease-out both;
    }

    .hero-text h1 {
        font-size: clamp(3rem, 7vw, 5.5rem);
        font-weight: 600;
        letter-spacing: -0.03em;
        margin: 0;
        color: rgba(240, 240, 240, 0.92);
        text-shadow:
            0 0 4px rgba(255, 255, 255, 0.12),
            0 0 8px rgba(255, 255, 255, 0.08);
    }

    .hero-text p {
        font-weight: 300;
        line-height: 1.4;
        margin: 0.25rem 0 0;
        color: rgba(220, 220, 220, 0.85);
        text-shadow: 0 0 2px rgba(255, 255, 255, 0.08);
    }

    .p1 {
        font-size: 1.7rem;
        margin-top: 0.3rem;
    }

    .p2 {
        font-size: 1.5rem;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>

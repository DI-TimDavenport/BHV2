import styled from "styled-components";

const SiteFooter = () => {
  return (
    <Wrapper class="container">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
        <li class="nav-item"><a href="/team" class="nav-link px-2 text-muted">Team</a></li>
        <li class="nav-item"><a href="/roadmap" class="nav-link px-2 text-muted">Roadmap</a></li>
        <li class="nav-item"><a href="/Collections" class="nav-link px-2 text-muted">Collections</a></li>
        <li class="nav-item"><a href="https://docs.bucketheads.io/" class="nav-link px-2 text-muted">Whitepaper</a></li>
        <li class="nav-item"><a href="/staking" class="nav-link px-2 text-muted">Staking</a></li>
        <li class="nav-item"><a href="/Token" class="nav-link px-2 text-muted">Token</a></li>
      </ul>
      <p class="text-center text-muted">© 2021 Syndic Industries</p>
    </footer>
  </Wrapper>
  );
};

export default SiteFooter;

const Wrapper = styled.div`
  padding: 1rem;
  background-color: rgb(33,37,41,0.8);
  backdrop-filter: blur(10px) opacity(90%);
`;
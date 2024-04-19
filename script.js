function collapseSidebar() {
    const sideBar = document.querySelector('aside'),
        collapseBtn = sideBar.querySelector('#collapse-sidebar');

    collapseBtn.addEventListener('click', () => {
        sideBar.classList.toggle('active');
    });
}

collapseSidebar()
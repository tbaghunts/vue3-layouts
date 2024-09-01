<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    style="margin-bottom: 40px"
  >
    <div class="container">
      <RouterLink to="/" class="navbar-brand">Home</RouterLink>

      <div class="navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink
              to="/left-sidebar"
              class="nav-link"
              active-class="active"
              >Left Sidebar</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              to="/right-sidebar"
              class="nav-link"
              active-class="active"
              >Right Sidebar</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/two-sidebar" class="nav-link" active-class="active"
              >Two Sidebar</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

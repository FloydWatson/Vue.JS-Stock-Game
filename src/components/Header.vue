<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    </div>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav nav">
        <router-link tag="li" to="/portfolio" activeClass="active" class="nav-item">
          <a>Portfolio</a>
        </router-link>
        <router-link tag="li" to="/stocks" activeClass="active" class="nav-item">
          <a>Stocks</a>
        </router-link>
      </ul>
      <ul class="nav navbar-nav navbar-right">
          <li><a href="">End Day</a></li>
          <li class="dropdown">
              <a href="" role="button" data-toggle="dropdown" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Save / load</a>
              <ul class="dropdown-menu">
                  <li><a href="">Save Data</a></li>
                  <li><a href="">Load Data</a></li>
              </ul>
          </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>

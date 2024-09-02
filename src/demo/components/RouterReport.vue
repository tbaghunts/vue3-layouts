<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h4>Router</h4>
        <pre>
          <code>{{ $route.meta }}</code>
        </pre>
      </div>
      <div class="col-6">
        <h4>Layouts provider</h4>
          <code>{{ $layoutsProvider.getConfig() }}</code>
      </div>
    </div>
  </div>
</template>

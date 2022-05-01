<template>
  <div class="row banner">
    <div class="col-12">
      <div class="content">
        <div class="quote">Easing productivity with digital innovations</div>
        <div class="actions">
          <label class="action hollow">
            <a>Case Study</a>
            <button style="display: none"></button>
          </label>

          <label class="action fill">
            <a>Free Quote</a>
            <button style="display: none"></button>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  min-width: 50%;

  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: #eeeeeeee;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8vh 12vw;
}

.quote {
  font-family: 'Abril Fatface', cursive;
  font-size: 4vw;
  text-align: center;
}

.actions {
  margin-top: 12vh;
}

.action {
  margin: 0 1.5vw;
  padding: 2vh 3vw;

  color: white;
  background: black;

  font-size: 1vw;
  font-family: 'Montserrat', cursive;
  font-weight: 300;

  border-radius: 4px;
  border-style: solid;
  border-color: black;
  border-width: 2px;
}

.hollow {
  background: white;
  color: black;
}

.fill {

}


</style>

<script>
export default {};
</script>
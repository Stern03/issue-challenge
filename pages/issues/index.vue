<template>
  <div>
    <Header />
    <Navigation />
    <IssueBox />
  </div>
</template>
<script>
import Header from '../../components/Header/Header.vue'
import Navigation from '../../components/Navigation/Navigation.vue'
import IssueBox from '../../components/IssueBox/IssueBox.vue'

export default {
  components: {
      Header, Navigation, IssueBox
  }
}
</script>

<template>
  <div>
    <Header />
    <Navigation />
    <IssueComments />
  </div>
</template>
<script>
import Header from '../../components/Header/Header.vue'
import Navigation from '../../components/Navigation/Navigation.vue'
import IssueComments from '../../components/IssueComments/IssueComments.vue'

export default {
  components: {
      Header, Navigation, IssueComments
  }
}
</script>


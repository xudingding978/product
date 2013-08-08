HubStar.LeoRoute = Ember.Route.extend(
  model: ->
    HubStar.Post.find()
)   
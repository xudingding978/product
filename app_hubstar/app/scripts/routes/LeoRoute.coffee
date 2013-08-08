App.PostRoute = Ember.Route.extend(
  model: ->
    App.Post.find()
)   
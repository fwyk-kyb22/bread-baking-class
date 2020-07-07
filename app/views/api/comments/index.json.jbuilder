json.array! @comments do |comment|
  json.content comment.content
  json.user_id  comment.user.id
  json.user_name  comment.user.nickname
  json.user_admin comment.user.admin
  json.id comment.id
end
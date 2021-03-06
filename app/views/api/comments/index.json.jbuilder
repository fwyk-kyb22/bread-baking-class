json.array! @comments do |comment|
  json.content comment.content
  json.user_id  comment.user.id
  json.user_name  comment.user.nickname
  json.user_admin comment.user.admin
  json.id comment.id
  json.created_at_month comment.created_at.month
  json.created_at_day comment.created_at.day
  json.created_at_hour comment.created_at.hour
  json.created_at_min comment.created_at.min
end
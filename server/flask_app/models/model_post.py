



class Post:
    def __init__(self, data):
        self.id = data['id']
        self.caption = data['caption']
        self.createdAt = data['created_at']
        self.updatedAt = data['updated_at']
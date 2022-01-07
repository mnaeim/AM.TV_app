"""empty message

Revision ID: 7be74e2a36d4
Revises: 2807edd385a2
Create Date: 2022-01-05 03:35:41.656715

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7be74e2a36d4'
down_revision = '2807edd385a2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('movies',
    sa.Column('imdb_id', sa.String(length=120), nullable=False),
    sa.Column('original_language', sa.String(length=120), nullable=False),
    sa.Column('original_title', sa.String(length=120), nullable=False),
    sa.Column('release_date', sa.String(length=120), nullable=False),
    sa.Column('title', sa.String(length=120), nullable=False),
    sa.Column('vote_average', sa.Integer(), nullable=True),
    sa.Column('vote_count', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('imdb_id'),
    sa.UniqueConstraint('original_title'),
    sa.UniqueConstraint('title')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('favorites',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('movie_id', sa.String(length=120), nullable=False),
    sa.ForeignKeyConstraint(['movie_id'], ['movies.imdb_id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'movie_id')
    )
    op.drop_table('user')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='user_pkey'),
    sa.UniqueConstraint('email', name='user_email_key')
    )
    op.drop_table('favorites')
    op.drop_table('users')
    op.drop_table('movies')
    # ### end Alembic commands ###
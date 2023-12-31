# Generated by Django 4.2.5 on 2023-12-09 02:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('adminapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Horario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hora_inicio', models.TimeField()),
                ('hora_fin', models.TimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Pabellon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Polideportivo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigo', models.CharField(max_length=50, unique=True)),
                ('contrasena', models.CharField(max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name='ReservaPolideportivo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('polideportivo_nombre', models.CharField(max_length=255)),
                ('fecha', models.DateField()),
                ('Horario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='adminapp.horario')),
            ],
        ),
        migrations.CreateModel(
            name='ReservaLaboratorio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('laboratorio_nombre', models.CharField(max_length=255)),
                ('fecha', models.DateField()),
                ('Horario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='adminapp.horario')),
            ],
        ),
        migrations.CreateModel(
            name='Laboratorio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
                ('pabellon', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='adminapp.pabellon')),
            ],
        ),
    ]

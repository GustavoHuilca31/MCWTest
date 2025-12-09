# Comparar dos archivos txt y mostrar las diferencias por separado para cada archivo. Si una línea existe en ambos pero en diferente orden, no se considera una diferencia.
def leer_archivo(nombre_archivo):
    with open(nombre_archivo, 'r', encoding='utf-8') as archivo:
        lineas = archivo.read().splitlines()
    return set(lineas)

def comparar_archivos(archivo1, archivo2):
    lineas1 = leer_archivo(archivo1)
    lineas2 = leer_archivo(archivo2)

    diferencias1 = lineas1 - lineas2
    diferencias2 = lineas2 - lineas1

    return diferencias1, diferencias2

def exportar_diferencias(diferencias, nombre_archivo):
    with open(nombre_archivo, 'w', encoding='utf-8') as archivo:
        for linea in diferencias:
            archivo.write(f"{linea}\n")

if __name__ == "__main__":
    archivo1 = 'mods1.txt'
    archivo2 = 'mods2.txt'

    diferencias1, diferencias2 = comparar_archivos(archivo1, archivo2)

    print(f"Diferencias en {archivo1}:")
    for linea in diferencias1:
        print(f"- {linea}")

    print(f"\nDiferencias en {archivo2}:")
    for linea in diferencias2:
        print(f"- {linea}")

    exportar_diferencias(diferencias1, 'diferencias_en_mods1.txt')
    exportar_diferencias(diferencias2, 'diferencias_en_mods2.txt')